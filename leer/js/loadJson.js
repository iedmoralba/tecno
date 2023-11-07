async function getJSON(url,callback){
  return await fetch(url)
  .then(res=>res.json())
  .then(data=>callback(data));
}
/*
getJSON('json/data.json',data=>{
  console.log('js',data);
});
*/

