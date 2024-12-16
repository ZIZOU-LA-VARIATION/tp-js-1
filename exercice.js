// Implémentation des fonctions pour gérer les différentes opérations et les tâches répétitives

function executercode() {
const operations = {
    a: (a, b) => a + b,
    s: (a, b) => a - b,
    ml: (a,b) => a * b,
    d: (a, b) => a / b,
    mo: (a, b) => a % b,
};
// Le symbole "=>" est appelé "flèche" ou " arrow function" en JavaScript. Il est utilisé pour définir une fonction anonyme, c'est-à-dire une fonction sans nom.


// Fonction pour demander l'opération à l'utilisateur
function demanderOperation() {
    const operation = prompt("Sélectionnez l'opération : addition (a), soustraction (s), multiplication (ml), division (d), modulo (mo) ");
    return operation;
  }
  
  // Fonction pour demander les nombres à l'utilisateur

  function demanderNombres() {
    const a = parseFloat(prompt("Saisissez le premier nombre :"));
    const b = parseFloat(prompt("Saisissez le deuxième nombre :"));
    return { a, b };
  }
    /* Dans la fonction demanderNombres(), nous utilisons les constantes a et b pour stocker les nombres saisis par l'utilisateur. Nous pourrions également utiliser des variables (var, let) à la place de constantes.

Cependant, il y a plusieurs raisons pour lesquelles nous utilisons des constantes. Nous utilison les constantes parce que  l'utilisation de constantes dans la fonction demanderNombres() nous permet de garantir l'immutabilité des valeurs, de rendre le code plus clair et d'éviter les erreurs. */
  
  // Fonction principale
  function calculer() {
    const operation = demanderOperation();
    const { a, b } = demanderNombres();
    if (operations[operation]) {
      const resultat = operations[operation](a, b);
      
      alert(`Le résultat de l'opération ${operation} est : ${resultat}`);
    } else {
      alert("Opération non valide");
    }

  }
  
  // Appel de la fonction principale
  calculer();
  
}
