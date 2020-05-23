function setCurrent(o, c)
{
    const class_nav = document.getElementsByClassName(o);
    const current = document.getElementById(c);
    for (var i=0; i < class_nav.length; i ++)
    {
        if (class_nav[i].classList.contains("active"))
        {
            class_nav[i].classList.remove("active");
        }
    }
    if (!current.classList.contains("active"))
    {
        current.classList.add("active");
    }
}

function scrollToElement(e)
{
    const targ = document.getElementById(e);
    var rect = targ.getBoundingClientRect();
    var brec = document.body.getBoundingClientRect();
    window.scrollTo(0, (rect.top - brec.top) - 250);
}