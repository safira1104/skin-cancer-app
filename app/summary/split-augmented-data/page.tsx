import React from 'react';

const Page = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#ffc0cb', height: '100vh' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        border: '2px solid #007bff',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e91e63', textAlign: 'center' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e91e63' }}>
              <th>Skin Lesion</th>
              <th>Training Images</th>
              <th>Validating Images</th>
              <th>Testing Images</th>
              <th>Total Images</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Malignant</td>
              <td>2132</td>
              <td>121</td>
              <td>187</td>
              <td>2440</td>
            </tr>
            <tr>
              <td>Benign</td>
              <td>3488</td>
              <td>231</td>
              <td>253</td>
              <td>3972</td>
            </tr>
            <tr style={{ fontWeight: 'bold' }}>
              <td>Total</td>
              <td>5620</td>
              <td>352</td>
              <td>440</td>
              <td>6412</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
