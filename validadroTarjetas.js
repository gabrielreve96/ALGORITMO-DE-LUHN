class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class Head {
    constructor() {
      this.head = null;
      this.last = null;
    }
  
    push(data) {
      let newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode; // Actualizar el puntero "last"
      }
    }
  
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    verificandoTarjeta(valor) {
      let current = this.head;
      let digitos = [];
      while (current !== null) {
        digitos.push(current.data);
        current = current.next;
      }
  
      let sum = 0;
      let isEven = false; // Cambiar la inicialización a false
      for (let i = digitos.length - 2; i >= 0; i--) { // Iterar desde el penúltimo dígito
        let digit = digitos[i];
        
        if (isEven) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }
        
        sum += digit;
        isEven = !isEven;
      }
      
      if ((sum + digitos[digitos.length - 1]) % 10 === 0) { // Agregar el dígito de verificación final al cálculo
        valor.textContent = "La tarjeta es válida";
        valor.style.color = "white";
      } else {
        valor.textContent = "La tarjeta no es válida";
        valor.style.color = "red";
      }
    }
  }
  
  const formulario = document.querySelector(".formulario");
  
  formulario.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(formulario);
    const [numero] = [...data.values()];
    if (numero) {
      let valor = document.createElement("span");
      valor.style = "color: white;";
      formulario.insertAdjacentElement("afterend", valor);
      formulario.reset();
      let copia = numero.split("").map(Number);
      let lista = new Head();
      copia.forEach(element => {
       
      });
  
      lista.verificandoTarjeta(valor);
    }
  });
  
  
  
  


 