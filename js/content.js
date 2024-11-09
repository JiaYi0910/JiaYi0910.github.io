function showTab(tabNumber) {
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');

    contents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(`content${tabNumber}`).classList.add('active');
    tabs[tabNumber - 1].classList.add('active');
}