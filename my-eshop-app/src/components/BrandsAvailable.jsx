export default function BrandsAvailable({ brands, selectedBrands, onChange }) {
    return (
      <details>
        <summary>Filtrer par marque</summary>
        <ul>
          {brands.map(brand => (
            <li key={brand.name}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => onChange(brand.name)}
                />
                {brand.name} ({brand.count})
              </label>
            </li>
          ))}
        </ul>
      </details>
    );
  }
  