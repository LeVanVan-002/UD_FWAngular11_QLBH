export class Note {
    title:string;//tên sp
    content:string;// mô tả sp
    image:string;//hình ảnh sp
    price:number;//gia sp
    dateNote:Date = new Date();// ngày tạo sp

    constructor() {
        this.title = "";
        this.content = "";
        this.image = "";
        this.price = 0;
    }
}