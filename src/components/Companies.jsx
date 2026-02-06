import './Companies.css';

const Companies = () => {
  const companies = [
    { name: 'ClickUp', logo: 'clickup' },
    { name: 'Dropbox', logo: 'dropbox' },
    { name: 'Paychex', logo: 'paychex' },
    { name: 'Elastic', logo: 'elastic' },
    { name: 'Stripe', logo: 'stripe' }
  ];

  return (
    <section className="companies">
      <div className="companies-container">
        <h2 className="companies-title">Worked with</h2>
        <div className="companies-grid">
          {companies.map((company) => (
            <div key={company.name} className="company-item">
              <span className="company-logo">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
