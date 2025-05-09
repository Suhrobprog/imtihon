export async function login(fn37) {
    const req = await fetch("https://json-api.uz/api/project/fn37/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fn37),
    });

    const res = await req.json();

    if (req.status === 200) {
        return res;
    } else {
        throw new Error("Xatolik bo‘ldi");
    }
}

export async function addProduct(obj) {
    const req = await fetch("https://json-api.uz/api/project/fn37/cars/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "", 
        },
        body: JSON.stringify(obj),
    });

    const res = await req.json();

    if (req.status === 200) {
        return res;
    } else {
        throw new Error("Xatolik bo'ldi");
    }
}
