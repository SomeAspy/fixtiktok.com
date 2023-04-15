# SCRATCH NOTES

https://www.tiktok.com/t/ZTR3mwQYo/ - short link, video

https://www.tiktok.com/@angelinevalo/video/7221645980876164394 - long link, video

https://www.tiktok.com/t/ZTR3mxqnQ/ - short link, slideshow

https://www.tiktok.com/@urworstnightmareofficial/video/7221646363078053163 - long link, slideshow

hm
I don't see a simple way to distinguish from slideshow and video
IDK how I would even implement slideshow into an embed
perhaps animate it server side?
but that seems ambitious at the moment

Short Video link redirects to
https://www.tiktok.com/@angelinevalo/video/7221645980876164394?_t=8bTSscZH474&_r=1
parameters can be scrapped
https://www.tiktok.com/@angelinevalo/video/7221645980876164394
goal: extract
https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-ve-0068c001-tx/og14AkheD5gHA88IHESIJgDcHGuOB4neEUMbRp/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=730&bt=365&cs=0&ds=3&ft=_rKBMBnZq8Zmo_Bq2c_vjtPZsAhLrus&mime_type=video_mp4&qs=0&rc=Z2RpZ2Q5ZjRpODszPDQ8OEBpMzxuO2k6ZjQ6ajMzZzczNEAyNDBiYTEvXmAxMS80NjZgYSNwY2JjcjRnLXBgLS1kMS9zcw%3D%3D&expire=1681484159&l=20230414085552EC4B2DECDC269E00D230&ply_type=2&policy=2&signature=97a23a0016f05d7e6b2fee2c061b9daf&tk=tt_chain_token

There is an expiration tag. This may mean we require Caching

# TODO

    - move router functions into own file
    - image prefetch checker
