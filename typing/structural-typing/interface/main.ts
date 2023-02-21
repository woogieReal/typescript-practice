interface Vector2D {
  x: number;
  y: number;
}

const calculateLength = (v: Vector2D): number => {
  return Math.sqrt(v.x * v.y + v.y * v.y);
};

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const namedV: NamedVector = {
  name: "somewhere",
  x: 2,
  y: 3,
};

/**
 * Vector2D와 NamedVector의 관계를 별도로 선언하지 않아도 동작
 * 타입스크립트 타입 시스템은 자바스크립트의 런타임 동작을 모델링
 * NamedVector의 구조가 Vector2D와 호환되기 때문에 정상 호출 가능
 */
calculateLength(namedV);


interface Vector3D {
  x: number;
  y: number;
  z: number;
}

/**
 * 벡터의 길이를 1로 만드는 정규화 함수
 * 하지만 이 함수는 1보다 조금 더 긴 길이를 가진 결과를 출력
 * calculateLength 함수가 2D 벡터를 기반으로 연산하기 때문
 */
const normalize = (v: Vector3D): Vector3D => {
  const length = calculateLength(v);
  
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  }
}

const calculateLengthL1 = (v: Vector3D): number => {
  let length = 0;

  for (const axis of Object.keys(v)) {
    /**
     * <error message>
     * 'string'은 'Vector3D'의 인덱스로 사용할 수 없기에 엘리먼트는 암시적으로 'any' 타입입니다.
     * Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Vector3D'.
     * No index signature with a parameter of type 'string' was found on type 'Vector3D'.
     * 
     * 아래와 같이 해결할 수 있다.
     * const coord = v[axis as keyof Vector3D];
     * const coord = v[axis as keyof typeof v];
     * 
     * 또는 Vector3D interface에 아래 추가
     * [index: string]: any;
     */
    const coord = v[axis];
    length += Math.abs(coord);
  }

  return length;
}
