$('#tableset').DataTable({
    searching: false,
    responsive: true,
    "autoWidth": false,
});
var table = $('#tableset').DataTable();
$('#tableset tbody').on('click', 'tr', function () {
    //console.log(table.row(this).data());
    $(".modal-body div span").text("");
    $(".FirstName span").text(table.row(this).data()[0]);
    $(".LastName span").text(table.row(this).data()[1]);
    $(".Email span").text(table.row(this).data()[2]);
    $(".Password span").text(table.row(this).data()[3]);
    $("#Modalbox").modal("show");
});