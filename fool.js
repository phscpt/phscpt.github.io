const a = () => {
    const now = new Date();
    if (now.getMonth() + 1 != 4 || now.getDate() != 1) return;

    const dark = {
        "--background-body": "#000000",
        "--background": "0f0f0f",
        "--background-alt": "#f7f7f7",
        "--selection": "#303030",
        "--text-main": "#d0d0d0",
        "--text-bright": "#fff",
        "--text-muted": "#bebebe",
        "--button-base": "#353535",
        "--form-text": "#e0e0e0",
    }

    for (const style in dark) {
        document.documentElement.style.setProperty(style, dark[style]);
    }

    document.body.style.setProperty("color", "white");
}
a();

