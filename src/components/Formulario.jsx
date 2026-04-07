import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';

// --- 1. Definição do Layout do PDF ---
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

// --- 2. Componente Principal do Formulário ---
export default function ContractGenerator() {
  const [formData, setFormData] = useState({ nome: '', cpf: '', servico: '', valor: '' });
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setShowPreview(false); // Esconde o link se os dados mudarem
  };

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1>Gerador de Contrato</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="nome" placeholder="Nome Completo" onChange={handleChange} style={inputStyle} />
        <input name="cpf" placeholder="CPF" onChange={handleChange} style={inputStyle} />
        <input name="servico" placeholder="Tipo de Serviço" onChange={handleChange} style={inputStyle} />
        <input name="valor" placeholder="Valor" onChange={handleChange} style={inputStyle} />
        
        <button 
          onClick={() => setShowPreview(true)} 
          style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Gerar Prévia do PDF
        </button>
      </div>

      {/* --- 3. Botão de Visualização/Download --- */}
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
                  borderRadius: '4px'
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
