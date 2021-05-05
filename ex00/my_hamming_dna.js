function my_hamming_dna(str1, str2){
  if (str1.length != str2.length){
      return -1;
      }
      var diffCount = 0;
      for (var i = 0; i<str1.length; i++){
          if(str1[i] != str2[i]){
              diffCount++
          }
        }
    return diffCount;
}
// console.log(my_hamming_dna("GGACTGA", "GGACTGA"));
// console.log(my_hamming_dna("ACCAGGG", "ACTATGG"));
// console.log(my_hamming_dna("GGACGGATTCTG", "AGG"));
// console.log(my_hamming_dna("", ""));