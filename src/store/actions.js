import {getUsers} from '../api/api'

export default{
   async getUsers(store){
        // 显示加载
        store.commit("showLoading")
        // 获取用户信息
        const {items:users} = await getUsers(store.state.keyWord)
        // 提交mutation
        store.commit("updateUsers",{users})
        // 清空输入框
        store.commit("updateKeyWord",{keyWord:""})

        if(users.length > 0){
            // 显示用户信息
            store.commit("showUsers")
        }else{
            // 显示没有用户
            store.commit("showNobody")
        }

    }
}