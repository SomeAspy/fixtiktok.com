fetch('https://www.tiktok.com/@angelinevalo/video/7221645980876164394', {
    // use useragent
    method: 'GET',
    headers: {
        'User-Agent':
            'Mozilla / 5.0(Windows NT 10.0; Win64; x64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 110.0.0.0 Safari / 537.36',
    },
}).then
    (response => response.text()).then
    (data => console.log(data));
