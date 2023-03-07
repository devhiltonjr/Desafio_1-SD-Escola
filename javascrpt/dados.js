const dados = {
    //inadipentes => Array => OBJETO
    inadimplentes: [
      {
        quantidade: 19,
        data_atualização: "12/02/2023"
      },
      {
        quantidade: 25,
        data_atualização: "28/01/2023"
      },
      {
        quantidade: 11,
        data_atualização: "08/12/2022"
      },
      {
        quantidade: 9,
        data_atualização: "20/11/2022"
      },
      {
        quantidade: 13,
        data_atualização: "17/10/2022"
      }
    ],
  
    //inadipentes por periodo => Array => OBJETO
    inadimplentes_por_periodo: [
      {
        quantidade: 8,
        periodo: "manhã"
      },
      {
        quantidade: 11,
        periodo: "tarde"
      }
    ],
  
    //faturamento => OBJETO
  
    faturamento: {
      valor_faturamento: "48.379,88",
      mes_de_referência:
        new Date().getMonth() < 10 ?
          `0${new Date().getMonth() + 1}` :
          `${new Date().getMonth() + 1}`
    },
  
  
    //deficit => OBJETO
  
    deficit: {
      valor_deficit: "7.306,14",
      mes_de_referência:
        new Date().getMonth() < 10 ?
          `0${new Date().getMonth() + 1}` :
          `${new Date().getMonth() + 1}`
    },
  
  
    //alunos mariculados => OBJETO
    alunos_matriculados: {
      total: 272,
      no_mes_atual: 4,
      mes_de_referência:
        new Date().getMonth() < 10 ?
          `0${new Date().getMonth() + 1}` :
          `${new Date().getMonth() + 1}`
    }
  }