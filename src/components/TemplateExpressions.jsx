const TemplateExpressions = () => {
   let nome = "Gregory Charmoso" 
   let aluno = {
        nome: "Lil Peter",
        turma: "C",
        ano:"2"
   }
    return (
        <div>
            <h1>Olá {nome} </h1>
            <h2>O {aluno.nome} está no {aluno.turma}º ano, na turma {aluno.turma} </h2>
        </div>

    )
}

export default TemplateExpressions
