https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
https://tungnt.net/su-dung-cac-http-verbs-get-post-put-delete-trong-web-api/


Vận dụng các sai lầm, các thiếu sót của các demo đã làm, Cả đội tiến hành xây dựng chung 1 phần mềm
Đây là demo lớn cuối cùng, anh em tập trung làm tận tâm, xử lý tình huống đầy đủ, làm phần nào xong phần đó.
Thời gian dự kiến cho anh em khoảng 16-20 ngày.
Phân phối làm việc 1 cách khoa học, không đợi đến cuối tuần rồi tăng cường làm mà không kịp.
Hàng tuần sẽ báo cáo công việc đã làm trong tuần (làm đến đâu báo cáo tới đó).

- Tên app: Quản lý kho hàng (WarehouseApp)
- Mục tiêu cho app này:
+ Tạo khả năng vận dụng làm việc nhóm.
+ Sử dụng chung 1 source code. (Học cách kết nối với nhau thông qua lưu trữ đám mây iclound Azure)
+ Khả năng tính toán, bắt điều kiện xảy ra, xử lý biểu đồ.
+ Học cách xử lý số liệu về kiểu số, kiểu ngày.

- Yêu cầu thành viên:
+ Lên mạng tìm đọc các thông tin liên quan đến kho hàng hóa, để hiểu được nghiệp vụ kho hàng, đơn hàng, đơn xuất nhập.
+ Tải 1 vài phần mềm của kiotviet, Posapp... để xem cách họ xử lý.
------
Những tính năng cần có của 1 phần mềm quản lý kho:
1. Đăng nhập ứng dụng - (Anh Vỹ)
2. Đăng ký người sử dụng - (Bảo)
2. Danh mục sản phẩm, sản phẩm (Thêm mới, chính sửa, xóa)  - AVy
3. Danh sách kho hàng - BẢo
4. Nhập hàng - A Vỹ
5. Trả hàng nhập - A Vỹ
6. Xuất hàng - Bảo
7. Trả hàng xuất - Bảo
8. Báo cáo 
- Báo cáo xuất (theo thời gian) - Bảo
- Báo cáo nhập (theo thời gian - AVỹ
- Báo cáo trả hàng (Nhập, xuất) - cả 2
- Thống kê (ghi lại log) người dùng đăng nhập. - Bảo 
- Báo cáo biểu đồ lịch sử đăng nhập - A Vỹ
Chú ý bảng dữ liệu như sau:
+ Người dùng - User(Id, Username, Password, FullName) //Dùng để đăng nhập
+ Thông tin người dùng - Profile(Id, UserId, FullName, Phone, Address, CreateDate, Notes)  //Dùng để đăng ký (CreateDate: Ngày tạo)
+ Thông tin sử dụng - Log(Id, UserId, LogTime) //Lưu lịch sử đăng nhập của người dùng (thời gian bao gồm giờ + ngày)
+ Sản phẩm - Product(Id, Code, Name, CreateDate, Unit) //Code: Mã sản phẩm, Unit: ĐƠn vị tính
+ Kho hàng - Warehouse(Id, Code, Name, Address, CreateDate) //Code: Mã kho hàng
+ Xuất/Nhập hàng - Invoice(Id, Code, Name, WarehouseId, Total, Discount, CreateDate, InvoiceDate) //InvoiceDate: Thời gian xuất/nhập, CreateDate: Thời gian tạo theo phần mềm
+ Chi tiết xuất/nhập - Detail(Id, InvoiceId, ProductId, Quanlity, Unit, Price)
//Tất cả CreateDate: đều do hệ thống tự động tạo, không cho người dùng tác động tới, chỉ hiển thị.



var d= a.split(0)[0]+a.split(a.split(0)[0])[1].substring(0,a.split(a.split(0)[0])[1].length-parseInt(a.split(0)[a.split(0).length-1]))+(parseInt(a.split(0)[a.split(0).length-1])+1)

var a="PX00001"

