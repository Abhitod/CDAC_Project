// checked
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Style/AdminPagenav.css"


const Navigation = () => {
  return (
    <>

      

   <nav id="admin-page-nav-container-my-nav">
<div id="logo-of-the-rental-car-app">
    <img src="https:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAz1BMVEX///8wMzr///0tNDr//v8kKi+SlZj8/PwwMzkuMTj///svNDgyNTyXm54uMzwwNTsnKjIwMj0hJS0sLzcbHygaICURFiAAAAAjJy/u7/AfJSr39/cqLjNJTVAiKCzl6Oo8PkNTV1qpqqzf398YHim/wMHO0dOztLbX2txjZ2kXGyJNUFZ8f4VeZGl7fX4AABDEyMoNEhcVGx2MjIxxdHmrra8/Q0MLDxJ9gIEwMUFFR1AACxhSVlUbJCsdIiHq7Omdn6YWFRkyMC+OkZpwcHA9k2WZAAALcUlEQVR4nO2bCXvaOBPHBQEftR0cHwTb8kl9csRgSHnTdptu8/0/0zsyEK6QtLtdnN1nfnmeltgC68+MNDOSQgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiC/Mdpt0mb/cvoMDav1zTdu99BZ83zr2vN/w1tGw4Ebq810pN/BB5+tnIcP4sjhVssnlbO+h5I5ddt+Oa6+Depe96xspR7ciW7b2gDTS1AoP+Yu0G4iCyeSfw3KyRWEi1cszA9KklST+hd9QqO8FVhUkpnbgwtfKvpPv4az1OkYw2z5VSeFRqlQqvV6wkC6JOk7pRYPVu+lkzQ53PBrD/r5ilT+aHmXzDHgs9lXChJVOtrqtja5+rqSvJ45x4k62ZErCdvoLPrqmGH0bBNPvDvXNsGa/qp6FGB0pbcah0r7EZk9YckUy0jKfWkFmtz/b+bG10rXC75NwxHnvjB3TQeieCUrWN6V3RmDc2eQAOfcDPWhH0JTOGNrg7Uvj4unaYVvEXHokVsXevX19cnAsGGQUkiTabekIyN58vXoK9w8zwobM0s8tQnta+/V/K72BFVMMrNqcJedwxGftCLmETGzodlUZswB3UyxbVN2/ZgUDYt4wzQy/SWI7l6PAC3NrQjGKaimpOsv39dG7NJuM4M/OWk+GrbhVslhF3k4ecdTa4QuYMBX/ZPR+BGoVmS9tAofDLS9y6rozof336KE68oWNK0p7HF3PU9pXg8Ke8eSUjPmLB1XXxrk7ifk7LYH6VGvE7Ia/g6y0mUkenZZney9JsWdYBDpprl2y/Mohsbdvk2UT6X5AvdV6g5u6yt/WHrk3406X4FQmXI7r6T1M71aJkavXMK9QnUirlq+RAR9666oMhPSiDJhvsyrHhqz01zth6U70Egf/tn97E6b8Nrd2gRKSTpH9K+7vCbQgvD+Mgwim5YRaXPwmKbaUq40cw053/Ug7JZwBBZIRnJg3hGHyBqQqCtSNW9utq7+PCg7b9HVzVDCyZcaa2t1vGjHL6BQp0sv7HimW9qdoVHxrakJYPzApkcUYtITvcVtkRZP2oli6Kufizc6XITGMFfaQElSqhk7NdmHBYUcp4kl0brdWDmvJcOFMqifGJ3GKeyIHn2jC42KjsJ5342zc+9qqn0FRTmXSmMXrchKEwIPVR4DqkGfFYex+ug4T9OvhbmvLtImjAjKAw8ezxW3+h33yKzn1N4VdMDNx5AebWpPKx4IRWmqVxeIFNYcpPyZEwdIss6b/2aQoZwrX/9KI/Tb+xJTrIyZ0kDEmv8/rmEZoM+IsP5zyk8RlSNfvCjZFEjMqdNlR+p8ZbCBUn+osIa1dBDJfELt6kZddwfqKqun42JsjomsflXFbKPlQWqGT0aNCIP/CZJH38s8snDWUsOHkn6lxXupIpiMwqJpcH3LANn+6ZB9ev9PYXXjKKRYQgmLEQqbtPSWuZRjipDOOQOFEIrQdRFQZB3b3odtoBw028o7EdzSufz+ce+YWiaNhgcDkm2mvjdJ6tub28VRxZVzw3voYiwu1TaUIeI2lYvLPfU9BtJxJ8dx3GgGorTKBqPJ6OdVZjCT4Qs1D2FotqK6s5ayXI16UEdATqFnTeeU1g0spTD89xqleehGwQwFHVRBfZnVaZQguSO7hTqwSIcue50UzDxTpJWuesV5oDStSXP+G2RNaGQDL8PVEqpDlPdS/ECFNKckMmewofafo7l+8PdBgbPtnLyoGsaoHMdI04VNpPUxH+c8alnhd2KdEY7hWIwGT/G2cGYel6usLKYWwT9vqGppwG2KJsQCKXtWwo9hTiBuFYo6hoUtkV/9um76S6UNPM3C97tTod0toOaz2JlEdK+Ae4hrhfJW+C7UITx5LJlMHuaK0EwFM9O+KDQTolT34eQqQdlAtORUq1g6N4Lg7u+FuTVshw6a6V7EY93/DiafumZbMKFRLzX01LSaX+4qER4GH/XhZRNPCsRFM4TlhUwhS1xdOicbCwmJVNcrSolLbO9JbiN5zp+GVWuZrCd1qhemLuwQv9R+TGehGdXakChOSRWvQogCFKaPPvlS/DWXlA/iO9+sqy0xyYUKjOqvjAp7CukFhRY4KLq3Jx/ur39NKf3eaUsy8zf6PnZVEWomlC46Epn1W0UBhBS+lACTbMsS2JguVxGisJxVcVFUQpj8Ccf544vrpBtWgivKOy1ehAsQkKS21l+Nly/3uXdwSMSPpEOubDCjt+HWfys9eoVCQiHPB/9/XSEJ/mEnJ7T+WfpkNhonVPYWyuknt8h/G+pzp/CBhRWg+NaqcXiHosedcHgmb3kt+3uri6vkJCQvuSlkIOLOvXms5BL4Gtof/gdj+JJFfCdS58es6h4opCtzmvGR5ntQrCO8e0Pv2V24AknO+TSNkwKSKZqP+0JAqXdrtFVe0E4jeJ1XOc7MN22D2b4eoel02HbvG/09uggEU8U1anz1wvSyQqZJYzsZJc7yiecEpfD5x3cNmnz7c2rHWw/dH2Ar/PGZvbJUanoo8W+nd8o4E14J1AHRv9jH5jPANOU7sN8qiSbPLpDnHJlHUY8MGjHj5ZJ55c9Lv3MPuqyNiSLIHMc3mc4wP6kyU5ZWkpg3vqHCuFybNp2EcSvdZZ9Ulbu5+k8ie/8SyvkyVIzFv65h1qcZ0sSPbIh4X2bXsGM1E9fS2dg6pwXUHjtkdz6F/dSSKlF+3vEHnp6knvpeaBvFtXW3H/TqntFBxBm+q8mOvEc4ulsJ5EHhcmlbQiPdUeLL39WrPY+gG8PR3emWQzC8uhOmziiqE640BZoeHxv1wiyUJ2dBew6/PYjyfC2vLRCsNaKbZc4/HHWwvNplMLEarVP07WykIMfCZlQ4fvw5WSOKbTuWq1QF41o12T4OSZvJeq/GbaPDxPJS3PiulvQVf7kLjdo6YN+MrQF+8ymJxMRG/pDmrXUcKfQ/5ySyyu0btO32x3gBEJLvgEPfRC8p/PNOE0WP8ePg9nOyj6M6csrJG4ItewahVP2YL+fAJddKrSubwSDLKh0/1Ib1koZqzetlponBl09X10UjSjk7O4WansH7O7ssOsFfFBo82NaJ3qnwFu7A7b4qIeJIe2a0KuLj8NjIq8lbGkJLy7CK2p9fEoGG4Y6uOpL8IHYq3ek1HGsNbTQ/SIQsL7v1xiCc7Sqwl4/auu76oLXwQt3c397fWy/fu1ujj4MslCvv6d3c9YUvvydQvVk3Yi93pwuUmX/UZPVav/uNlngyXjAll9lvVqoLbU+pnlRHefhSbp3LMMYHq9Qt9mBtQHzP31SLkFqET+/c/uiXnJK6o+RW6ouDypQyL8XhcBC25b5/XreO1FIFvXxIlHTRFBw7mPGGzeFJtnWj9/DSUyAn6zPR8najxfusvIj0eT1vjZYclyWcZqmEcBVVbVYPC3C0WgUBFtvl2WYutwnLopfXSq/DLxjWcPMz0IKBbFEJ2m6XLJgN56Ox/kkz8Mw/HIPbPa01+twpgl1VM2ARQOq05r1rrfA/hUgWnjmbHY384LwiUvLYWO2dIZJrFQTyZybEBYpZX2HwDYYsF3huvuUrtcXQZ50tU/vGbZAB+26nu3B+81iNgdh7mRRcUq0jJNsOPSt5r3VSuKIWz1N3J43m5umZtR7xEzd9R61VLDiFdxSB5pmGEbR7xdS4Ib5YlopUVqWWWYduyb/nv7upAN+O2SbhdyU7RVKnlkYmsZMCoI0k9ka0jYQlE85ZQmFSOJbjvN++v+rOJY/zMqUWXcFLgeCsqH/HlzuFzktZes/Cebrdf0X4za/DoFbzpbEDZ3z/mXaR/8jCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCPIf5/+LIhAVREXXyAAAAABJRU5ErkJggg==" id="img-logo" />
    <span id="name-of-the-app-rental-car-app">Bus Rental Service</span>
</div>
</nav>

    </>
  )
}

export default Navigation