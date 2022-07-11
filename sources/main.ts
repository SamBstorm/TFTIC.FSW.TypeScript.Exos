let titu1 : Personne = new Personne('Reeves','Keanu',new Date(1963,4,12));
let titu2 : Personne = new Personne('Willis','Bruce',new Date(1959,3,1));

let compte1 : Courant = new Courant('BE551234567890',titu1);
console.log(`Le compte ${compte1.numero} appartient à ${compte1.titulaire.nom} ${compte1.titulaire.prenom} et a ${compte1.solde}€.`);
compte1.depot(10000);
console.log(`Le compte ${compte1.numero} appartient à ${compte1.titulaire.nom} ${compte1.titulaire.prenom} et a ${compte1.solde}€.`);
compte1.retrait(5000);
console.log(`Le compte ${compte1.numero} appartient à ${compte1.titulaire.nom} ${compte1.titulaire.prenom} et a ${compte1.solde}€.`);

try {
    let compte2 : Courant = new Courant('BE331234567890', titu2, -200, 50); 
    console.log(`Le compte ${compte2.numero} appartient à ${compte2.titulaire.nom} ${compte2.titulaire.prenom} et a ${compte2.solde}€.`);
} catch (error) {
    console.warn(error);
}