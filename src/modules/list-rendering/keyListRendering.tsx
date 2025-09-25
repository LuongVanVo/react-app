export default function KeyListRendering() {
    return (
        <div className="p-4">
            <h2>2. Tại sao phải dùng key khi sử dụng list rendering</h2>
            <p>Trả lời: </p>
            <ul className="list-disc list-inside mb-4">
                <li>Giúp React xác định chính xác phần tử nào thay đổi (thêm, xóa, di chuyển) để chỉ cập nhật những node DOM thực sự cần thiết nhằm ít thao tác DOM, hiệu năng tốt hơn.</li>
                <li>Giữ nguyên state của component con: nếu không có key (React so sánh dựa vào thứ tự), khi chèn/xóa giữa danh sách, React dựa vào vị trí, dẫn đến unmount + mount lại các phần tử phía sau, gây mất state (ví dụ mất focus, dữ liệu local bị reset)</li>
            </ul>
            <strong>Vì vậy: Dùng key giúp React tối ưu diffing (giảm số lần React phải tháo ra gắn lại các node) và bảo toàn state, còn không dùng key sẽ dễ gây render thừa và mất state khi danh sách thay đổi.</strong>
        </div>
    );
}
