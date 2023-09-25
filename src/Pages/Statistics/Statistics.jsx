import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';


const storageData = JSON.parse(localStorage.getItem('donationList'));


const totalDonation = 12;
const yourDonation = storageData? storageData.length : 0;


const data = [
  { name: 'Your Donation', value: yourDonation },
  { name: 'Total Donation', value: totalDonation - yourDonation }
];

const COLORS = ['#00C49F', '#FF444A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className='text-3xl' x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{ textAlign: 'center', marginTop: '10px', display: 'flex', gap: '80px', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '20px', fontSize: '24px' }}>Your Donation</span>
          <div style={{ width: '200px', height: '20px', backgroundColor: COLORS[0], marginRight: '10px' }}></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '20px', fontSize: '24px' }}>Total Donation</span>
          <div style={{ width: '200px', height: '20px', backgroundColor: COLORS[1], marginRight: '10px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
