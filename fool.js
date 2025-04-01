const infect = () => {
    console.log(document.body.innerHTML);

    let txt = String(document.body.innerHTML);
    if (txt.includes("Princeton")) {
        let i = txt.indexOf("Princeton");
        document.body.innerHTML = txt.substring(0, i) + "WWP" + txt.substring(i + 9);
    }
    else if (txt.includes("PHS")) {
        let i = txt.indexOf("PHS");
        document.body.innerHTML = txt.substring(0, i) + "HSS" + txt.substring(i + 3);
    }
    else if (txt.includes("CPT")) {
        let i = txt.indexOf("CPT");
        document.body.innerHTML = txt.substring(0, i) + "WWPPC" + txt.substring(i + 3);
    }
    else return;

    setTimeout(infect, 1000);
}

const fool = () => {
    const now = new Date();
    if (now.getMonth() + 1 != 4 || now.getDate() != 1) return;

    const dark = {
        "--background-body": "#000000",
        "--backgoround": "0f0f0f",
        "--background-alt": "#f7f7f7",
        "--selection": "#303030",
        "--text-main": "#d0d0d0",
        "--text-bright": "#fff",
        "--text-muted": "#bebebe",
        "--button-base": "#353535",
        "--form-text": "#e0e0e0",
    }

    for (const style in dark) document.documentElement.style.setProperty(style, dark[style]);

    setTimeout(infect, 1000);
}
fool();
