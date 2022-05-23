# Component

Komponen merupakan bagian dari user interface.komponen bersifat reusable code atau bisa di gunakan berulang-ulang. Misalnya ketika membuat component button maka component tersebut bisa dipanggil berulang-ulang di setiap component lainnya.

> Functional Components

functional component merupakan javascript function dimana dapat menerima props sebagai argument dan mengembalikan react element.

```
const ContohComponent = () =>
{
    return <h1>Hello Function Component !</h1>;
}
```

> Class Components

Class component mengharuskan untuk extends component dari react itu sendiri dan menggunakan render method untuk mengembalikan html.

```
class ContohComponent extends React.Component
{
    render(){
          return <h1>Hello Class Component !</h1>;
    }
}
```
