function message(b, id, mass) {
    var key = Object.keys(mass);
    //
    if(key.length !== 0) {
        sending(key[0]); 
    }
    //
    function sending(name) {
        var d = [];
        //
        var text = false;
        //
        mass[name].forEach(e => {
            if(Array.isArray(e)) {
                text = e[0];
            } else {
                d.push({type: name, media: e});
            }
        });
        //
        if(text !== false) {
            d[0].caption = text;
            d[0].parse_mode = 'markdown';
        }
        //
        b.sendMediaGroup(id, d);
        //
        delete mass[name];
        //
        message(b, id, mass);
    }
};
