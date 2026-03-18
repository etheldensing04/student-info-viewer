function searchStudent() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let table = document.getElementById('studentTable');
    let tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toUpperCase().indexOf(input) > -1 ? '' : 'none';
        }
    }
}
