import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, BlobProvider } from '@react-pdf/renderer';

// Definição do Layout do PDF (Mantido)
const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, fontFamily: 'Helvetica' },
  title: { fontSize: 18, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  content: { marginBottom: 15, lineHeight: 1.6 },
  footer: { marginTop: 50, borderTopWidth: 1, paddingTop: 10, textAlign: 'center' }
});

const MyContractPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>CONTRATO DE PRESTAÇÃO DE SERVIÇOS</Text>
      <Text style={styles.content}>
        Eu, {data.nome || "__________"}, portador do CPF {data.cpf || "__________"}, 
        declaro para os devidos fins que aceito os termos do serviço de {data.servico || "__________"}.
      </Text>
      <Text style={styles.content}>Valor acordado: R$ {data.valor || "0,00"}.</Text>
      <View style={styles.footer}>
        <Text>Assinado digitalmente por {data.nome || "Cliente"}</Text>
      </View>
    </Page>
  </Document>
);

export default function ContractGenerator() {
  const [formData, setFormData] = useState({ nome: '', cpf: '', servico: '', valor: '' });
  const [showPreview, setShowPreview] = useState(false);

  const servicosSugeridos = [
    "Aeroportos/Portos",
    "Consultas Médicas",
    "Shows",
    "Localidades/Serviços"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setShowPreview(false);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1>Gerador de Contrato</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="nome" placeholder="Nome Completo" onChange={handleChange} style={inputStyle} />
        <input name="cpf" placeholder="CPF" onChange={handleChange} style={inputStyle} />
        
        {/* CONTAINER DO COMBOBOX COM SETA */}
        <div style={{ position: 'relative', width: '100%' }}>
          <input 
            name="servico" 
            list="lista-servicos" 
            placeholder="Selecione ou digite o serviço" 
            onChange={handleChange} 
            style={{ ...inputStyle, width: '100%', boxSizing: 'border-box' }} 
          />
          {/* SETA CUSTOMIZADA */}
          <div style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none', // Clique passa para o input
            width: '0',
            height: '0',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '7px solid #888' // Cor da seta
          }}></div>

          <datalist id="lista-servicos">
            {servicosSugeridos.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>
        </div>

        <input name="valor" placeholder="Valor" onChange={handleChange} style={inputStyle} />
        
        <button 
          onClick={() => setShowPreview(true)} 
          style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
        >
          Gerar Prévia do PDF
        </button>
      </div>

      {/* ... restante do código do preview (BlobProvider) ... */}
      {showPreview && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', textAlign: 'center' }}>
          <p>O seu PDF está pronto!</p>
          <BlobProvider document={<MyContractPDF data={formData} />}>
            {({ url, loading }) => (
              <a 
                href={url} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  textDecoration: 'none', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  padding: '10px 20px',
                  borderRadius: '4px',
                  display: 'inline-block'
                }}
              >
                {loading ? "Gerando..." : "Abrir PDF em nova aba"}
              </a>
            )}
          </BlobProvider>
        </div>
      )}
    </div>
  );
}

const inputStyle = { padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' };
