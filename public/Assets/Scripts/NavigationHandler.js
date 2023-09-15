 
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const homebtn = document.getElementById('homebtn');
    const dashboardbtn = document.getElementById('dashboardbtn');
    const databtn = document.getElementById('databtn');
    const homeContent = document.getElementById('home-content');
    const dashboardContent = document.getElementById('dashboard-content');
    const dataContent = document.getElementById('data-content');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle("active");
        navbar.classList.toggle('active');
    });

    function setActiveButton(activeBtn) {
        const buttons = [homebtn, dashboardbtn, databtn];
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        activeBtn.classList.add('active');
    }

    homebtn.addEventListener('click', () => {
        homeContent.style.display = 'block';
        dashboardContent.style.display = 'none';
        dataContent.style.display = 'none';
        setActiveButton(homebtn);
    });

    dashboardbtn.addEventListener('click', () => {
        homeContent.style.display = 'none';
        dashboardContent.style.display = 'block';
        dataContent.style.display = 'none';

        setActiveButton(dashboardbtn);
    });

    databtn.addEventListener('click', () => {
        homeContent.style.display = 'none';
        dashboardContent.style.display = 'none';
        dataContent.style.display = 'block';

        setActiveButton(databtn);
    });
});