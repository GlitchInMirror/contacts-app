export default function swDev() {

  if(process.env.NODE_ENV === "production"){
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response", response);
  })
}
}



