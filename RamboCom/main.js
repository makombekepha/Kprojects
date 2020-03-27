const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "qcvkx6mi2rdv",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "AvRtG4W-UnSmYh1Ohr6GvVWuDLK2gJ4ALHa4d3Ybttk"
});

//const myRequest = new Request("./json.json");
async function getData() {


    let contentful = await client.getEntries({
        content_type: 'name'
    });
    //console.log(contentful);
    // .then((response) => console.log(response.items))
    // .catch(console.error)

    //const response = await fetch(myRequest)
    //const data = await response.json();

    let myPost = contentful.items;
    myPost = myPost.map(items => {
        console.log(items);
        const { olwal, body,title,cheque,title2,body2,title3,body3,christine} = items.fields;
        //const {id}=items.sys;
        document.getElementById('turr').innerHTML = body;
        document.getElementById('tur').innerHTML = olwal;
        document.getElementById('tt').innerHTML = title;
        document.getElementById('chekkk').innerHTML = body2;
        document.getElementById('chek').innerHTML = cheque;
        document.getElementById('chekk').innerHTML = title2;
        document.getElementById('tinah').innerHTML = body3;
        document.getElementById('tina').innerHTML = christine;
        document.getElementById('tin').innerHTML = title3;
        const {id}=items.sys;
        const image=items.fields.image.fields.file.url;
        document.getElementById('pic').src= image;
        const kiamba = items.fields.kiamba.fields.file.url;
        document.getElementById('erik').src = kiamba;
        const okoth = items.fields.okoth.fields.file.url;
        document.getElementById('mac').src = okoth;
        console.log(items.fields.okoth.fields.file.url)
        //const wikiImage = "items.fields.wikiImage.fields.file.url";
       // document.getElementById('wikiImage').innerHTML = wikiImage;
        /* const{id}=items.sys;
         const myImage=items.fields.sys;
         return {blogTitle,blogText,id,myImage}*/
    })
}
getData();









d = new Date();
var YYYY = d.getFullYear();
document.getElementById("cpYear").innerHTML = YYYY;