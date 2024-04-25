export interface CreateTableUseCase {
    execute: ( options: Options) => string;
}


export interface Options{
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(

        // Dependency Injection
        
    ){}

    execute({ base, limit = 10 }: Options ){
        let outputMessage = '';
        for( let i = 0; i <= limit; i++ ){
            outputMessage += `${ base } x ${ i } = ${ base * i } \n`
        }
        return outputMessage;
    }
}