// Haftaya githuba projey yapıp u derse göster
//jsonplechpşder dan 
//async ve await araştırma

const jsonverisi=

`[
 {"id":1,"ad":"Fatih","soyad":"bingül","yas":25,"rol":"öğretmen"},
 {"id":2,"ad":"mustafa","soyad":"çelik","yas":19,"rol":"madenci"},
 {"id":3,"ad":"semih","soyad":"dursun","yas":11,"rol":"fabrika çalışanı"},
 {"id":4,"ad":"gamze","soyad":"kara","yas":21,"rol":"kimyager"}


]`;


const yeniveri=JSON.parse(jsonverisi);

for(let i=0;i<yeniveri.length;i++)
{
    if(yeniveri[i].yas>20)
    {
        console.log(yeniveri[i].ad);
    }
}
/*
const veriler= {

    "id": "1",
    "isim":"ahmet",
}*/
