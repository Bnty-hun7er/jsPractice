const user = {
    name : "mike " ,
    getfullname () {
        console.log(`this is my name ${name}`);
    }
}


for (let key in user) {
    console.log(user[key]);
}
for (let key of Object.keys(user)) {
    console.log(key);
}

for (let entry of Object.entries(user)) {
    console.log(entry);
}