## บันทึกช่วยจำ
    React + Redux + Webpack สำหรับโปรเจคนี้ เป็นการทำ Todoapp อย่างง่าย ๆ สำหรับ ในการลองเล่นครั้งแรกนี้

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
- store                -> ส่วนสร้าง action ขึ้นมาใหม่
    - configureStore.js
- webpack.config.js
