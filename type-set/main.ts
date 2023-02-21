interface Human {
  age: number;
  name: string;
  job: string;
}

interface Dog {
  age: number;
  name: string;
  owner: Human;
}

type CommonFeature = keyof (Human | Dog);

let cFeature: CommonFeature;

cFeature = "age";
cFeature = "name";


type allFeautre = keyof (Human & Dog);

let aFeature: allFeautre;

aFeature = "age";
aFeature = "name";
aFeature = "job";
aFeature = "owner";
