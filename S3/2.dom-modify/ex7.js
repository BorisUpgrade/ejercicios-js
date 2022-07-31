/* elimina todos los nodos que tengan la clase .fn-remove-me*/

const locP$$ = document.querySelectorAll('.fn-remove-me');

for(const delP$$ of locP$$){
    delP$$.remove();
}