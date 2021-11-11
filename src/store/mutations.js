export default {
    // mutation 第一个参数是state
    updateKeyWord(state,{keyWord}){
        state.keyWord = keyWord
    },
    updateUsers(state,{users}){
        state.users = users
    },

    showTip(state){
        state.showTip=true;
        state.showLoading=false;
        state.showUsers=false
    },
    showLoading(state){
        state.showTip=false;
        state.showLoading=true;
        state.showUsers=false
    },
    showUsers(state){
        state.showTip=false;
        state.showLoading=false;
        state.showUsers=true
    },
    showNobody(state){
        state.showTip=false;
        state.showLoading=false;
        state.showUsers=false
    },
}