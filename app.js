var Alert=document.getElementById('alert');
document.addEventListener('scroll',()=>{
Alert.classList.add('alert-show')
},{once:true})
closeAlert=()=>Alert.classList.remove('alert-show')