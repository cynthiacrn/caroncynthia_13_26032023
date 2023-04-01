import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProfileFailure, setProfileStart, setProfileSuccess } from "../store/reducers/profile";
import { client } from "../client"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

function Profile() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.profile.loading)
  const profile = useSelector((state) => ({ firstName: state.profile.firstName, lastName: state.profile.lastName }))
  const [isEditing, setIsEditing] = useState(false)
  const [newProfile, setNewProfile] = useState(null)

  useEffect(() => {
    dispatch(setProfileStart())
    client.getProfile()
      .then((res) => {
        dispatch(setProfileSuccess({ firstName: res.firstName, lastName: res.lastName }))
        setNewProfile({ firstName: res.firstName, lastName: res.lastName })
      })
      .catch(({ response: { data: { message } } }) => {
        dispatch(setProfileFailure(message))
      })
  }, [])

  const handleSave = (event) => {
    event.preventDefault()
    if (newProfile.firstName === profile.firstName && newProfile.lastName === profile.lastName) {
      return
    }

    dispatch(setProfileStart())
    client.updateProfile({ firstName: newProfile.firstName, lastName: newProfile.lastName })
      .then((res) => {
        dispatch(setProfileSuccess({ firstName: res.firstName, lastName: res.lastName }))
        setNewProfile({ firstName: res.firstName, lastName: res.lastName })
      })
      .catch(({ response: { data: { message } } }) => {
        dispatch(setProfileFailure(message))
      })
      .finally(() => {
        setIsEditing(false)
      })
  }

  const handleCancel = (event) => {
    event.preventDefault()
    setNewProfile({ firstName: profile.firstName, lastName: profile.lastName })
    setIsEditing(false)
  }

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

export default Profile