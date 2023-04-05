
  export default function Code(){
    function limpaCampos(){
        setNome("");
        setMatricula("");
        setCurso("");
        setBimestre("");
        setId("");
      }

      const [alunos, getAlunos] = useState([]);
      const [nome, setNome] = useState("");
      const [matricula, setMatricula] = useState("")
      const [curso, setCurso] = useState("");
      const [bimestre, setBimestre] = useState("")
      const [_id, setId]=useState("");
    
      const url = ('https://api-aluno.vercel.app/aluno/')
    
  };