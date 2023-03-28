import {useEffect, useState} from "react";
import { client } from "../client";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function User() {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [newProfile, setNewProfile] = useState(null);

  useEffect(() => {
    setLoading(true)
    client.getProfile()
      .then((res) => {
        setProfile(res)
        setNewProfile({
          firstName: res?.firstName || '',
          lastName: res?.lastName || '',
        });
      })
      .finally(() => setLoading(false))
  }, [])

  const handleSave = () => {
    if (newProfile.firstName === profile.firstName && newProfile.lastName === profile.lastName) {
      return
    }

    setLoading(true)
    client.updateProfile({ firstName: newProfile.firstName, lastName: newProfile.lastName })
      .then((res) => {
        console.log(res)
        setProfile(res)
        setNewProfile({
          firstName: res?.firstName || '',
          lastName: res?.lastName || '',
        })
      })
      .finally(() => {
        setLoading(false)
        setIsEditing(false)
      })
  };

  const handleCancel = () => {
    setNewProfile({
      firstName: profile?.firstName || '',
      lastName: profile?.lastName || '',
    });
    setIsEditing(false);
  };

  return (
    <>
      <Navigation />

      <main className="main bg-dark">
        <div className="header">
          {!loading ? (
            <>
              {isEditing ? (
                <>
                  <h1>Welcome back<br/></h1>

                  <div className="profile-form-container">
                    <div className="input-wrapper">
                      <label htmlFor="username"></label>
                      <input
                        id="username"
                        type="text"
                        value={newProfile.firstName}
                        onChange={event =>
                          setNewProfile({
                            ...newProfile,
                            firstName: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="username"></label>
                      <input
                        id="username"
                        type="text"
                        value={newProfile.lastName}
                        onChange={event =>
                          setNewProfile({
                            ...newProfile,
                            lastName: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="profile-form-buttons">
                    <button type="button" className="save-button" onClick={handleSave}>
                      Save
                    </button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h1>Welcome back<br/>{profile.firstName} {profile.lastName}!</h1>
                  <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default User;