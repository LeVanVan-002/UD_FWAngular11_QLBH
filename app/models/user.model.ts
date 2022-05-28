export class Account {
    name: string = "";//họ tên tên 
    image: string = "";//ảnh
    address: string = "";//dịa chỉ
    phone: number = 0;//số điện thoại
    price: number = 0;//mức lương
    birthday: Date = new Date;//ngày tháng năm sinh

    constructor(name: string = "", image: string = "", address:string =  "", phone: number = 0, price :number=0) {
        this.name = name;
        this.image = image;
        this.address = address;
        this.phone = phone;
        this.price = price;
    }
}