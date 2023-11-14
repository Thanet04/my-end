export class ActivityDto {
    name : string;
}

export class PetDto {
    name : string;
    kind : string;
}

export class StudentDto {
    id : string;
    name : string;
    birthdate : Date;

    pet : PetDto;

    activities : [ActivityDto]
}