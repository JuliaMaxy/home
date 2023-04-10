document.addEventListener('DOMContentLoaded', function(){
    let star = document.querySelector('.star');
    star.addEventListener('mouseover', function(){
        star.style.color = 'fuchsia';
    });
    star.addEventListener('mouseout', function(){
        star.style.color = '#d9dbde';
    });
});
document.addEventListener('DOMContentLoaded', function(){
    let icon = document.querySelectorAll('.icon');
    for(let i of icon)
    {
        i.addEventListener('mouseover', function(){
            i.style.color = 'fuchsia';
        });
        i.addEventListener('mouseout', function(){
            i.style.color = '#ffffff';
        });
    }
});