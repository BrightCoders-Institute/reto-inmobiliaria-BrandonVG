import {Inmueble} from '../types/InmuebleType';

class JsonReader {
  static jsonInmueblesToArray(data: any) {
    const inmueblesArray: Inmueble[] = data.map((item: any) => {
      const inmueble: Inmueble = {
        id: item.id,
        name: item.name,
        address: item.address,
        rooms: item.rooms,
        bathrooms: item.bathrooms,
        size: item.size,
        price: item.price,
        stars: item.stars,
        like: item.like,
        img: item.img,
      };
      return inmueble;
    });
    return inmueblesArray;
  }
}

export default JsonReader;
