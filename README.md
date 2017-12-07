## บันทึกช่วยจำ
    React + Redux + Webpack สำหรับโปรเจคนี้ เป็นการทำ Todoapp อย่างง่าย ๆ สำหรับ ในการลองเล่นครั้งแรกนี้
#### [ ที่มาของโปรเจคนี้ คลิก ! ](https://engineering.thinknet.co.th/%E0%B8%A1%E0%B8%B5%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-redux-middleware-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B9%89%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%9A-bc718b36f08c)
#### โครงสร้างไฟล์
- action               -> การกระทำอะไรสักอย่่าง
    - index.js
- components           -> ชิ้นส่วนย่อย
    - Buttton.js
    - CurrentCount.js
    - Footer.js
    - Link.js
    - Todo.js
    - TodoList.js
- containers           -> ส่วนที่รวมส่วนประกอบ
    -  AddTodo.js
    -  CountTodo.js     
    -  Dahsbord.js
    - VisibleCountTodo.js
    - VisibleTOdoList.js
- firebase             -> ส่วน config firebase
    - config.js
- reducer              -> ตัวรับ ​action
    - counter.js       
    - todos.js
    - visibilityFilter.js   
- routers              -> จัดการเส้นทาง
    - AppRouter.js
- store                -> ส่วนสร้าง action ขึ้น
    - configureStore.js
- webpack.config.js    -> webpack-dev-server
#### install
```
npm install redux
npm install redux-thunk
npm install webpack
npm install webpack-dev-server
```
#### Tool
    - React Devoloper Tool
    - Redux DevTool


#### [ รู้จัก Redux middleware กันมั้ยครับ? ](https://engineering.thinknet.co.th/%E0%B8%A1%E0%B8%B5%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-redux-middleware-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B9%89%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%9A-bc718b36f08c)
concept ของ redux middlewares นั้นก็คล้ายกัน แต่ redux middlewares นั้นแตกต่างออกไป คือ redux middlewares นั้นจะ วางอยู่ระหว่าง ตอนที่ dispatch action กับ ตอนก่อนที่ action จะไปถึง reducer
![Alt text](/img/redux.png)
 #### redux-thunk
 เป็น middleware ที่ทำให้เราทำ asynchronous actions ได้ คือโดยปกติถ้าไม่มี middleware ตัวนี้ เราจะต้องสั่ง dispatch action โดยที่ action เป็น plain object เท่านั้น แต่ว่าเราจะเห็นว่า middleware ตัวนี้ ทำให้เราสามารถสั่ง dispatch action ที่เป็น function ได้ โดยที่มันจะรีบไปทำฟังก์ชั่นนั้นก่อน จนกว่า action นั้นจะเป็น plain object มันจึงจะส่งให้ reducer ไปคำนวณ state ต่อไป(ซึ่งจริงๆแล้วมันไม่ได้ส่งให้ reducer นะ แต่มันส่งให้ middleware ตัวต่อไปต่างหาก ถ้าไม่มี middleware ตัวต่อไปแล้วมันถึงจะส่งไปให้ reducer)
```bash
 store => next => action
```
#### เจาะรายละเอียดโค้ด
```javascript
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
```
![Alt text](/img/map.png)
- mapStateToProps ->  เรียก  State จากที่ไหนก็ได้
    -  แยกข้อความที่ถูกขีดออกมาแสดง
- mapDispathcToProps -> สามารถ request  จากที่ไหนก็ได้  (action creaator)
    -  เมื่อมีการคลิก dispath เพื่อเปลื่อนแปลง
![Alt text](/img/denda.png)

```javascript
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
```
จากนั้นส่ง function ไปยัง file Link
