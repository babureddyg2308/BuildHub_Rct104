import React, { useState } from 'react';
import './Admin.css'; 
import { initialState } from './AdminData';
import imageLogo from './Logo/BuildHub1.jpg'

export const AdminPanel = () => {
    const [data, setData] = useState(initialState);
  
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({});
    const [searchQuery, setSearchQuery] = useState(''); 
    const [activeTab, setActiveTab] = useState('Dashboard'); 
  
    const handleEdit = (id) => {
      const itemToEdit = data.find((item) => item.id === id);
      setItemToEdit(itemToEdit);
      setEditModalOpen(true);
    };
  
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
  
    const handleEditSubmit = (editedItem) => {
      setData(data.map((item) => (item.id === editedItem.id ? editedItem : item)));
      setEditModalOpen(false);
    };
  
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const filteredData = data.filter((item) => {
      const testName = item.Test.toLowerCase();
      const searchQueryLowercase = searchQuery.toLowerCase();
      return testName.includes(searchQueryLowercase);
    }); 
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="admin-panel">
        <div className='SideDiv'>
          <aside className="sidebar">
            <nav>
              <ul>
                <li onClick={() => handleTabChange('Dashboard')}>Dashboard</li>
                <li onClick={() => handleTabChange('Dashboard')}>Lab Test</li>
                <li onClick={() => handleTabChange('Dashboard')}>Users</li>
              </ul>
            </nav>
          </aside>
        </div>
        <div className='MainDiv'>
          <header className="header">
            <div className="logo">
              <img src={imageLogo} alt="BuldHub Logo" />
            </div>
            <div className="search-bar">
              <input
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button style={{marginLeft:"10px"}}>Search</button>
            </div>
            <div className="nav-buttons">
              <button >Home</button>
            </div>
          </header>
          <main className="main-content">
            {activeTab === 'Dashboard' && (
              <div>
                <h2 style={{ color: 'black', marginTop:'100px',fontSize:'28px'}}>Dashboard</h2>
                <div className="metrics">
                  <div className="metric">
                    <span className="metric-value">10</span>
                    <span className="metric-label">New User</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">17</span>
                    <span className="metric-label">Total Orders</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">24</span>
                    <span className="metric-label">Product Sold</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">₹ 10374</span>
                    <span className="metric-label">This Month</span>
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Lab Test</th>
                      <th>Price</th>
                      <th>Offer Price</th>
                      <th>Rating</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.Test}</td>
                        <td>₹ {item.price}</td>
                        <td>₹ {item.offerPrice}</td>
                        <td>{item.Rating}</td>
                        <td>
                          <button onClick={() => handleEdit(item.id)}>Edit</button>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(item.id)} className='DeleteButton'>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination">
                  {[...Array(Math.ceil(filteredData.length / itemsPerPage))].map((_, i) => (
                    <button key={i + 1} onClick={() => paginate(i + 1)}>
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>

        {editModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Edit Item</h2>
              <form>
                <label>
                  Id:
                  <input type="number" value={itemToEdit.id} disabled />
                </label>
                <br />
                <label>
                  Test:
                  <input type="text" value={itemToEdit.Test} onChange={(e) => setItemToEdit({ ...itemToEdit, Test: e.target.value })} />
                </label>
                <br />
                <label>
                  Price:
                  <input type="number" value={itemToEdit.price} onChange={(e) => setItemToEdit({ ...itemToEdit, price: parseInt(e.target.value) })} />
                </label>
                <br />
                <label>
                  Offer Price:
                  <input type="number" value={itemToEdit.offerPrice} onChange={(e) => setItemToEdit({ ...itemToEdit, offerPrice: parseInt(e.target.value) })} />
                </label>
                <br />
                <label>
                  Rating:
                  <input type="number" value={itemToEdit.Rating} onChange={(e) => setItemToEdit({ ...itemToEdit, Rating: parseInt(e.target.value) })} />
                </label>
                <br />
                <button onClick={() => handleEditSubmit(itemToEdit)}>Save Changes</button>
                <button onClick={() => setEditModalOpen(false)}>Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
