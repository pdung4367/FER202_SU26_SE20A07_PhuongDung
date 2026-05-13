let tong = (a,b) => a + b;
console.log(tong(5,3));
let chao = () => console.log("Xin chao");
chao();
let chao1 = (ten= "phdum") => console.log(`Xin chao,${ten}!`);
chao1();
let person = {
    id: 1,
    name: "Bob",
    age: 30,
    address: "123 HT"
};
let Chao2 = (doiTuong) => {
    // doiTuong ở đây chính là biến person khi được truyền vào
    console.log("Xin chào " + doiTuong.name);
};
Chao2(person);
// 1. viet ham Chao1 nhan 1 tham so ten va in ra loi chao voi ten do sau do goi
//2. Viet ham Chao2 nhan 1 tham so la 1 doi tuong Person 
// có các thuộc tính id, name, age, address
//sau đó in ra lời chào với tên của đối tượng đó 
//goi ham chao2 với mẫu
