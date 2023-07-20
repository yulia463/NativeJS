// fn => fn()
// fn => обработчик(handler) , подписчик(subscriber) ,слушатель (listener)
// {key: value, ...} => объект с инфой о событии => event , ev , e
// fn(e)


const sm = document.getElementById("small")

const onClickHandler = (e) => {
    alert("Yo!!!!")

}
onClickHandler({...}) // event

sm.onclick = onClickHandler

sm.addEventListener("click" , onClickHandler)
sm.removeEventListener("click" , onClickHandler)