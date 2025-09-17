import React, { useState } from 'react';

export default function TestPing() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const callPing = async () => {
    setResult(null);
    setError(null);
    try {
      // 프록시 사용 시 (frontend/package.json에 "proxy": "http://localhost:8080" 이 있다면):
      const res = await fetch('/api/ping'); 

      // 프록시 없이 직접 호출하려면 아래를 사용:
      // const res = await fetch('http://localhost:8080/api/ping');

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setResult(JSON.stringify(data));
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Ping 테스트</h3>
      <button onClick={callPing}>Ping /api/ping 호출</button>
      <div style={{ marginTop: 10 }}>
        {result && <div>응답: <pre>{result}</pre></div>}
        {error && <div style={{ color: 'red' }}>오류: {error}</div>}
      </div>
    </div>
  );
}